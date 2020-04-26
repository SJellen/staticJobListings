
const ul = document.getElementById('job-listing')  // get unordered list 
const url = 'data.json'  // get data



function createNode(element) {
    return document.createElement(element)  // create element
}

function append(parent, el) {
    return parent.appendChild(el)  // append second paremeter(element) to first
}





fetch(url)
.then(response => response.json())
.then((data) => {
    let jobs = data  // get results
    return jobs.map((job) => {  //map through results
        let li = createNode('li')


        languages = createNode('span')
        img = createNode('img')
        posted = createNode('span')
        company = createNode('span')
        isNew = createNode('span')
        featured = createNode('span')
        position = createNode('span')
        role = createNode('span')
        contract = createNode('span')
        role = createNode('span')
        where = createNode('span')
        level = createNode('span')





        posted.className = "posted"
        posted.innerHTML = `${job.postedAt}`

        company.className = "company"
        company.innerHTML = `${job.company}`

        isNew.className = "isNew"
        isNew.innerHTML = `${job.new ? 'NEW!' : ''}`

        featured.className = "featured"
        featured.innerHTML = `${job.featured ? 'FEATURED' : ''}`

        position.className = "position"
        position.innerHTML = `${job.position}`

        role.className = "role"
        role.innerHTML = `${job.role}`

        contract.className = "contract"
        contract.innerHTML = `${job.contract}`

        role.className = "role"
        role.innerHTML = `${job.role}`

        where.className = "where"
        where.innerHTML = `${job.location}`

        level.className = "level"
        level.innerHTML = `${job.level}`
        
        languages.className = "languages"
        languages.innerHTML = ` ${job.languages}`




        li.className = 'job-card'
        img.src = job.logo
        img.className = 'job-logo'
        

        

        append(li, img)
        append(li, posted)
        append(li, company)
        append(li, isNew)
        append(li, featured)
        append(li, position)
        append(li, role)
        append(li, contract)
        append(li, where)
        append(li, level)
        

        append(li, languages)

        append(ul, li)
    })
    
})


.catch(err => {
    console.log('Somethings wrong', err)
})

