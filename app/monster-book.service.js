angular.module("gameApp")

.service('monsterBook', function() {

	const monsterBook = {
		plant: {
			name: 'Plant',
			life: 410,
			pow: 90,
			int: 270,
			ski: 260,
			spe: 200,
			def: 120,
			skills: [
				{
					name: "Root Combo",
					type: 'pow',
					cost: 21,
					dmg: 40,
					hit: 120,
					wit: 20,
					crt: 20
				},{
					name: "Plant Combo",
					type: 'pow',
					cost: 25,
					dmg: 60,
					hit: 40,
					wit: 40,
					crt: 20
				},{
					name: "Toxic Pollen",
					type: 'int',
					cost: 35,
					dmg: 20,
					hit: 60,
					wit: 80,
					crt: 20
				},{
					name: "Seed Gatling",
					type: 'int',
					cost: 27,
					dmg: 60,
					hit: 60,
					wit: 40,
					crt: 100
				},{
					name: "Life Steal",
					type: 'int',
					cost: 50,
					dmg: 60,
					hit: 60,
					wit: 0,
					crt: 0,
					special: "lifesteal"
				}
			]
		},
		golem: {
			name: 'Golem',
			life: 250,
			pow: 470,
			int: 260,
			ski: 120,
			spe: 110,
			def: 410,
			skills: [
				{
					name: "Root Combo",
					type: 'pow',
					cost: 21,
					dmg: 40,
					hit: 120,
					wit: 20,
					crt: 20
				},{
					name: "Plant Combo",
					type: 'pow',
					cost: 25,
					dmg: 60,
					hit: 40,
					wit: 40,
					crt: 20
				},{
					name: "Toxic Pollen",
					type: 'int',
					cost: 35,
					dmg: 20,
					hit: 60,
					wit: 80,
					crt: 20
				},{
					name: "Seed Gatling",
					type: 'int',
					cost: 27,
					dmg: 60,
					hit: 60,
					wit: 40,
					crt: 100
				},{
					name: "Bone Breaker",
					type: 'int',
					cost: 50,
					dmg: 60,
					hit: 60,
					wit: 0,
					crt: 0,
					special: "lifesteal"
				}
			]

		},
		tiger: {
			name: 'Tiger',
			life: 180,
			pow: 190,
			int: 330,
			ski: 410,
			spe: 340,
			def: 120,
			skills: [
				{
					name: "Root Combo",
					type: 'pow',
					cost: 21,
					dmg: 40,
					hit: 120,
					wit: 20,
					crt: 20
				},{
					name: "Plant Combo",
					type: 'pow',
					cost: 25,
					dmg: 60,
					hit: 40,
					wit: 40,
					crt: 20
				},{
					name: "Toxic Pollen",
					type: 'int',
					cost: 35,
					dmg: 20,
					hit: 60,
					wit: 80,
					crt: 20
				},{
					name: "Seed Gatling",
					type: 'int',
					cost: 27,
					dmg: 60,
					hit: 60,
					wit: 40,
					crt: 100
				},{
					name: "Lightning Storm",
					type: 'int',
					cost: 50,
					dmg: 60,
					hit: 60,
					wit: 0,
					crt: 0,
					special: "lifesteal"
				}
			]
		}
	}

	return monsterBook;

})