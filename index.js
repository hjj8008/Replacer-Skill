module.exports = function TEST(mod) {
	let job = -1
	
	mod.game.on('enter_game', () => {
		job = (mod.game.me.templateId - 10101) % 100
	})
	
	mod.game.on('leave_game', () => {
		job = -1
	})
	
	mod.hook('C_START_INSTANCE_SKILL', 7, event => {
		if (job != 4) return
		if (Math.floor(event.skill.id/10000) == 1) {
			event.skill.id = 330112
			mod.send('C_START_INSTANCE_SKILL', 7, {
				skill: event.skill
			})
			return true
		}
	})
	
}
