#!/usr/bin/env groovy
pipeline {
    agent any
    parameters {
        booleanParam(name: 'REBUILD_IMAGE', defaultValue: false, description: 'Force the acceptance test image to be rebuilt?')
    }
    stages {
        stage('Building test image') {
            steps {
                script {
                    ansiColor('xterm') {
                        def buildArgs = "-f Dockerfile"
                        if (params.REBUILD_IMAGE) {
                            buildArgs += ' --no-cache'
                        }
                        sh """
                            docker build ${buildArgs} -t defra/rod-catch-returns-frontend-tests .
                        """
                    }
                }
            }
        }
        stage('Executing tests') {
            steps {
                script {
                    ansiColor('xterm') {
                        def envString = env.getEnvironment().collect { k, v -> "-e ${k}=\"${v}\"" }.join(' ')
                        sh """
                            echo "Testing connectivity"
                            curl -sSf "${SERVICE_URL}" || exit 1
                            mkdir -p ${WORKSPACE}/logs
                            docker run ${envString} --mount type=bind,source=${WORKSPACE}/logs,target=/app/logs defra/rod-catch-returns-frontend-tests:latest --logLevel ${WDIO_LOG_LEVEL}
                        """
                    }
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts allowEmptyArchive: true, artifacts: 'logs/**'
            junit 'logs/junit/**'
        }
        cleanup {
            cleanWs cleanWhenFailure: true
        }
    }
}
