export default {
    formatetime(data) {
        let timer = new Date(data)
        return timer.getFullYear() +'/'+ (timer.getMonth()+1) +'/'+ timer.getDate() + '-'+ timer.getHours() + ':'+timer.getMinutes()+':'+timer.getSeconds()
    }
}