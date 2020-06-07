import { useState, useEffect } from 'react'
import moment from 'moment'

const Hora = () => {
	const [hora, setHora] = useState('')

	useEffect(() => {
		let interval = setInterval(() => {
			setHora(moment().format('LT'))
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	return hora
}

export default Hora
