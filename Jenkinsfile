#!/usr/bin/env groovy
@Library('defra-shared@master') _

pipeline {
    agent any
    parameters {
        booleanParam(name: 'REBUILD_IMAGE', defaultValue: false, description: 'Force the acceptance test image to be rebuilt?')
    }
    stages {
        stage('Building test container') {
            steps {
                script {
                    ansiColor('xterm') {
                        def buildArgs = "--build-arg http_proxy=${env.http_proxy} --build-arg https_proxy=${env.https_proxy} ."
                        if (params.REBUILD_IMAGE) {
                            buildArgs = '--no-cache ' + buildArgs
                        }
                        docker.build("defra/rod-catch-returns-frontend-tests", buildArgs)
                    }
                }
            }
        }
        stage('Executing tests') {
            steps {
                script {
                    ansiColor('xterm') {
                        sh """
                            echo "Testing connectivity"
                            curl -sSf "${SERVICE_URL}" || exit 1
                            curl -sSf "${ADMIN_SERVICE_URL}" || exit 1
                        """
                        def mounts = [ "type=bind,source=${WORKSPACE}/logs,target=/app/logs"]
                        sh "mkdir -p ${WORKSPACE}/logs"
                        dockerRun('defra/rod-catch-returns-frontend-tests', ['docker_args': "-e HTTP_PROXY=${env.http_proxy} -e HTTPS_PROXY=${env.https_proxy}"], mounts)
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
