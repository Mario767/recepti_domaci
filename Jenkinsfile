pipeline {
    agent any

    environment {
        APP_SERVER = '54.161.54.55'
        APP_USER = 'ubuntu'
        APP_DIR = '/var/www/recepti'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Mario767/recepti_domaci.git'
            }
        }

        stage('Build') {
            steps {
                dir('Backend_domacirecepti') {
                    sh 'composer install --no-interaction --prefer-dist'
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
                        ssh -o StrictHostKeyChecking=no ${APP_USER}@${APP_SERVER} '
                            mkdir -p ${APP_DIR}
                        '
                        rsync -avz --delete \
                            -e "ssh -o StrictHostKeyChecking=no" \
                            Backend_domacirecepti/ ${APP_USER}@${APP_SERVER}:${APP_DIR}/
                        ssh -o StrictHostKeyChecking=no ${APP_USER}@${APP_SERVER} '
                            cd ${APP_DIR}
                            composer install --no-interaction --prefer-dist
                            cp .env.example .env
                            php artisan key:generate
                            php artisan serve --host=0.0.0.0 --port=8000 &
                        '
                    """
                }
            }
        }
    }

    post {
        failure {
            echo 'Pipeline failed! Deploy se nece izvrsiti.'
        }
        success {
            echo 'Deploy uspjesan! App dostupna na http://3.88.59.174:8000'
        }
    }
}
