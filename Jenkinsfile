pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "codex-app"
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        // Replace with your docker registry if needed
        // DOCKER_REGISTRY = "your-docker-hub-username"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running linter...'
                sh 'npm run lint'
            }
        }

        stage('Build App') {
            steps {
                echo 'Building application...'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image ${DOCKER_IMAGE}:${DOCKER_TAG}..."
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
            }
        }

        /*
        stage('Push to Registry') {
            steps {
                echo 'Pushing image to registry...'
                // sh "docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                // sh "docker push ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest"
            }
        }
        */

        stage('Deploy (Local/Dev)') {
            steps {
                echo 'Simulating deployment...'
                // Example of running the container locally for testing
                // sh "docker run -d -p 8080:80 --name ${DOCKER_IMAGE}-dev ${DOCKER_IMAGE}:latest"
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'CI/CD pipeline succeeded!'
        }
        failure {
            echo 'CI/CD pipeline failed.'
        }
    }
}
