import { RepositoryItem } from "./RepositoryItem";

//import '../styles/repositories'

const repositoryName = 'unformHahaha';

export function RepositoryList() {

    const repository = {
        name: 'kkk',
        description: 'Forms in React',
        link: 'https://github.com/unform/unform'
    }


    return (
        <section className="repository-list" id="">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem 
                    repository = {repository} 
                    />
                <RepositoryItem 
                    repository = {repository} 
                    />
                <RepositoryItem 
                    repository = {repository} 
                    />
                <RepositoryItem 
                    repository = {repository} 
                    />
            </ul>
        </section>
    )
}