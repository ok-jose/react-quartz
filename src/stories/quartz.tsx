import {useState} from 'react'
import {Quartz} from '../lib'

export const QuartZ = () => {
    const [value, setValue] = useState<string>('* * * * * *')
    return (
        <Quartz value={value} onChange={(changedStr) => {
            console.info("🚀 ~ file:quartz method: line:8 -----", changedStr)
            setValue(changedStr)
        }}/>
    )
}