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
                        def mounts = [ "type=bind,source=${WORKSPACE}/logs,target=/app/logs"]
                        sh "mkdir -p ${WORKSPACE}/logs"
                        dockerRun('defra/rod-catch-returns-frontend-tests', null, mounts, "-v /dev/shm:/dev/shm")
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
        failure {  
             emailext body: "Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", from: 'noreply@aws.defra.cloud', mimeType: 'text/html', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "${env.ERROR_NOTIFY_LIST}";
        }
        cleanup {
            cleanWs cleanWhenFailure: true
        }
    }
}
