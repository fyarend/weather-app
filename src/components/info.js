import {WiSunset} from 'react-icons/wi'

function Info({ info, state }){
    return (
        <div>
         { state ?  <div className='info'>
                <p id='sehir'>{info.name}, {info.sys.country}</p>
                <div className='genelDeger'>
                    <p id='sicaklık'>{info.main.temp}</p> <WiSunset className=''/>
                </div>
                <p id='havaDurumu'>{info.weather[0].description}</p>
                <div className='his'>
                    <p id='hissedilen'>{info.main.feels_like}</p> <WiSunset className=''/>
                </div>
            </div> : null}
        </div> 
    )
}

export {Info};