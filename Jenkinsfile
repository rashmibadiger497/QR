pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("qr-app")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    bat 'docker rm -f qr-container || exit 0'
                    bat 'docker run -d -p 3005:3000 --name qr-container qr-app'
                }
            }
        }

    }
}
