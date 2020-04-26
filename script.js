
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
        let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span')
        img.src = job.logo
        span.innerHTML = `${job.company} ${job.new} ${job.featured} ${job.position} ${job.role} ${job.level} ${job.PostedAt} ${job.contract} ${job.location} ${job.languages}`

        append(li, img)
        append(li, span)
        append(ul, li)
    })
    
})


.catch(err => {
    console.log('Somethings wrong', err)
})

