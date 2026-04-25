pipeline {
    agent any
    environment {
        APP_SERVER = '100.31.63.77'
        APP_USER = 'ubuntu'
        BACKEND_DIR = '/var/www/recepti'
        FRONTEND_DIR = '/var/www/frontend'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Mario767/recepti_domaci.git'
            }
        }
        stage('Build Backend') {
            steps {
                dir('Backend_domacirecepti') {
                    sh 'composer install --no-interaction --prefer-dist'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('Front_domaci_recepti') {
                    sh 'npm install --production'
                }
            }
        }
        stage('Test') {
            steps {
                dir('Backend_domacirecepti') {
                    sh 'cp .env.example .env'
                    sh 'php artisan key:generate'
                    sh 'php artisan test'
                }
            }
        }
        stage('Deploy') {
            steps {
                sshagent(['app-server-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ${APP_USER}@${APP_SERVER} 'mkdir -p ${BACKEND_DIR} ${FRONTEND_DIR}'
                        
                        rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" \
                            Backend_domacirecepti/ ${APP_USER}@${APP_SERVER}:${BACKEND_DIR}/
                        
                        rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" \
                            Front_domaci_recepti/ ${APP_USER}@${APP_SERVER}:${FRONTEND_DIR}/

                        ssh -o StrictHostKeyChecking=no ${APP_USER}@${APP_SERVER} '
                            cd ${BACKEND_DIR} && composer install --no-interaction --prefer-dist
                            cp .env.example .env && php artisan key:generate
                            pkill -f "artisan serve" || true
                            nohup php artisan serve --host=0.0.0.0 --port=8000 &> /tmp/backend.log &
                            
                            cd ${FRONTEND_DIR} && npm install --production
                            pkill -f "node" || true
                            nohup node .output/server/index.mjs &> /tmp/frontend.log &
                        '
                    """
                }
            }
        }
    }
    post {
        failure {
            echo 'Pipeline failed!'
        }
        success {
            echo 'Deploy uspjesan! Backend: http://100.31.63.77:8000 Frontend: http://100.31.63.77:3000'
        }
    }
}
