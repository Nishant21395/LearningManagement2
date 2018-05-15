let app = new Vue({
    el: "#app",
    data:{
        courses:[],
        courseId : ''
    },
    methods: {
        getAllCourses() {
            new Promise((resolve) => {
                axios.get('api/courses').then(function (response) {
                resolve(response.data)
            })
        }).then((data) => {
                console.log(data)
            this.courses = data
        
        }).catch((err)=>{
                console.log(err)
        })
        },
        viewBatches(id) {
            new Promise((resolve) => {
                axios.get(`api/courses/id/batches`).then(function (response) {
                resolve(response.data)
            })
        }).then((data) => {
                console.log(data)
            this.courses = data
            
        }).catch((err)=>{
                console.log(err)
        })
        }
    }

})
app.getAllCourses();
