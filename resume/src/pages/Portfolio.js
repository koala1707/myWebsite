import React from 'react';
import Cards from './Cards'
import {useEffect, useState} from 'react';
import '../stylesheets/portfolio.css'

function Portfolio() {
    const [repoList, setRepoList] = useState([])

    // const githubRepo = () => {
        useEffect(() => {
        fetch(`http://localhost:8090/github-repo`)
        .then(res => res.json())
        .then(data =>  data.map((item, index) => {
            setRepoList(repoList => repoList.concat(item))
        }))
        setRepoList([])
    // }
    },[])

    return (
        <div className='portfolio'>
            <div className='wrapper'>
                {repoList.map((items, index) => (
                    <>
                        <Cards
                            img={items.image}
                            title={items.title}
                            description={items.description}
                            button={items.github_link}
                        />
                    </>
                ))}
            </div>
        </div>
    )

}

export default Portfolio;