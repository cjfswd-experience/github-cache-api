import * as githubController from '../controllers/github.controller.js'
import fs from 'fs'

export const cronjobs = async () => {
    if (!fs.existsSync('./src/public')) {
        fs.mkdirSync('./src/public')
    }
    fs.writeFileSync('./src/public/repository.json', JSON.stringify(await githubController.getAllData()))
    fs.writeFileSync('./src/public/repository-markdown.json', JSON.stringify(await githubController.getRepositoriesMarkdown()))
    fs.writeFileSync('./src/public/gist.json', JSON.stringify(await githubController.getGist()))
    console.log('created')
};