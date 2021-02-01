const d=document,
n=navigator;
export default function getGeolocation(id){
const $id=d.getElementById(id),
options={
    enableHigAccuracy:true,
    timeout:5000,
    maximunAge:0
};
const success=(position)=>{
    //console.log(position);
    let coords=position.coords;
    $id.innerHTML=`
    <p>Tu posicion actual es:<p>
    <ul>
    <li>Latitud <b>${coords.latitude}</b></li>
    <li>Longitud <b>${coords.longitude}</b></li>
    <li>Precision <b>${coords.accuracy}</b></li>
    </ul>
    <a href="https://www.google.com.pe/maps/@${coords.latitude},${coords.longitude},20z" target="blank" rel="noop">Ver el google<a/>`
}
const error=(err)=>{
    $id.innerHTML=`<p><mark>ERROR..${err.code}:${err.message}</mark></p>`
    //console.log(`ERROR..${err.code}:${err.message}`)
}
n.geolocation.getCurrentPosition(success,error,options)

}