// import Card from "../componentes/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../componentes/Card";

function Home() {
	const [membros, setMembros] = useState([]);
	const [search, setSearch] = useState('');
	const [checkbox, setCheckbox] = useState(['Engenharia Eletrônica']);
	const [checked, setChecked] = useState([]);

	const filterCheck = () => {
		console.log(checked)

	}

	let cursos =[
		'gois'
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

		var duplicatedList = [];
		var uniqueList = [];
		membros.forEach(element => {
			duplicatedList.push(element.course);
		});
		uniqueList = [...new Set(duplicatedList)];




	return (
		<div>
			<input type="search" onChange={e => {
				setSearch(e.target.value.toLowerCase());
				console.log(search)
			}} />

			{uniqueList.map((m, index) => (
				<div key={index}>
					<br></br>
					<input type="checkbox" id={m} value={m} onClick={

						e => {
							let temp_arr = checkbox;
							temp_arr.push(e.target.value);
							setCheckbox(temp_arr);
							console.log(checkbox);
							console.log('Entrei')

							// else{
							// 	temp_arr.shift(e.target.value);
							// 	setCheckbox(temp_arr);
							// 	console.log(checkbox);
							// }
						}}

					/>{m}
				</div>
			))}

			{membros.filter(m => m.name.toLowerCase().includes(search) && checkbox.includes(m.course)).map((m) => (
				<Card curso={m.course} cargo={m.role} key={m.name}>{m.name}</Card>
			))}
			<button onClick={() => console.log(membros.filter(m => checkbox.includes(m.course)))}>click</button>
		</div>
	);
}

export default Home;
