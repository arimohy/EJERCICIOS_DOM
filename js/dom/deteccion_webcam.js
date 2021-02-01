const d=document,
n=navigator;
export default function webCam(id){
    const $video=d.getElementById(id);
    //console.log(n.mediaDevices.getUserMedia);
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video:true,Audio:false})
        .then(stream=>{
            console.log(stream);
            $video.srcObject=stream;
            $video.play()
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin",`<p>sucedio el siguiente error<mark>${err}</mark></p>`)
            console.log(`sucedio ${err}`)
        })
}}