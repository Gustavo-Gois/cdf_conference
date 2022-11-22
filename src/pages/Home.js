// import Card from "../componentes/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../componentes/Card";

function Home() {
	const [membros, setMembros] = useState([]);
	const [search, setSearch] = useState('');
	const [checkbox, setCheckbox] = useState([]);
	const [checked, setChecked] = useState([]);
	
	const filterCheck = () => {
		console.log(checked)

		// if (checkbox == checked){
				// setChecked(true)
	}

	let cursos = [
		'Engenharia Eletrônica',
		'Engenharia Elétrica',
		'Engenharia de Controle e Automação',
		'Engenharia Mecânica',
		'Engenharia de Materiais',
		'Todos'
	]

	useEffect(() => {
		axios.get('https://neo-empresarial.herokuapp.com/api/members/')
			.then((res) => {
				setMembros(res.data);
				cursos.forEach(element => {
					// console.log(element)
				});
				// setCurso(res.data); depois ver segmentação


			})
	}, [])

	return (
		<div>
			<input type="search" onChange={e => {
				setSearch(e.target.value.toLowerCase());
				console.log(search)
			}} />

			{cursos.map((m) => (
				<>
					<br></br>
					<input type="checkbox" id={m} value={m} onChange={

							e => {
								setCheckbox(e.target.value);
								console.log(checkbox)
							}
			}/>{m}
					{console.log(m.checked)}
				</>
			))}
			
			{membros.filter(member => member.name.toLowerCase().includes(search) &&
				member.course.includes(checkbox)).map((m) => (
				<>
					<Card curso={m.course} cargo={m.role}>{m.name}</Card>
				</>
			))}
		</div>
	);
}

export default Home;
