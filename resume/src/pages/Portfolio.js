import React from 'react';
import Cards from './Cards'
import {useEffect, useState} from 'react';
import '../stylesheets/portfolio.css'
// import photo from '../images/github'

function Portfolio() {
    const [repoList, setRepoList] = useState([])

        useEffect(() => {
        fetch(`repo/github-repo`)
        .then(res => res.json())
        .then(data =>  data.map((item, index) => {
            // console.log('repo: ', item)
            setRepoList(repoList => repoList.concat(item))
        }))
        setRepoList([])
    },[])

    return (
        <div className='portfolio'>
            <div className='wrapper'>
                {repoList.map((items, index) => (
                    <div key={index}>
                        <Cards 
                            img={items.image}
                            title={items.title}
                            language={items.language}
                            description={items.description}
                            button={items.github_link}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Portfolio;