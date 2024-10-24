() => {
	const inputs = {
		nameInput: document.getElementById("user_name"),
		phoneInput: document.getElementById("user_phone_num"),
		mailInput: document.getElementById("user_mail"),
	};
	const submBtn = document.querySelector("[submit-btn]");

	submBtn.addEventListener("click", checkingFields);

	function checkingFields() {
		Object.values(inputs).forEach((element) => {
			if (!element.value.trim()) {
				console.error(`field ${element.name} is Empty`);
			} else {
				console.log(`Field ${element.name} is fine`);
			}
		});
	}
};
