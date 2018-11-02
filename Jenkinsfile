#!/usr/bin/env groovy
@Library('defra-shared@master') _

pipeline {
    agent any
    stages {
        stage('Building test container') {
            steps {
                script {
                    ansiColor('xterm') {
                        docker.build("defra/rod-catch-returns-frontend-tests", "--build-arg http_proxy=${env.http_proxy} --build-arg https_proxy=${env.https_proxy} .")
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
                        dockerRun('defra/rod-catch-returns-frontend-tests', null, mounts)
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
