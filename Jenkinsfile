pipeline {
    agent any
    environment {
        APP_SERVER = '3.84.85.2'
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
                        ssh -o StrictHostKeyChecking=no ubuntu@3.84.85.2 'mkdir -p /var/www/recepti'
                        rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no" Backend_domacirecepti/ ubuntu@3.84.85.2:/var/www/recepti/
                        ssh -o StrictHostKeyChecking=no ubuntu@3.84.85.2 'cd /var/www/recepti && composer install --no-interaction --prefer-dist && cp .env.example .env && php artisan key:generate && pkill -f artisan || true && nohup php artisan serve --host=0.0.0.0 --port=8000 &> /tmp/backend.log &'
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
            echo 'Deploy uspjesan! App: http://3.84.85.2:8000'
        }
    }
}
