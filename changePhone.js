debugger
function replacePhone() {
		const selectContactPhone = document.querySelector(".ft-header-dropdown ft-header-contact-phones");
		const active_Elements = document.activeElement;
		const current_selection = active_Elements.value.substring(active_Elements.selectionStart, active_Elements.selectionEnd);
		const currentCountry = active_Elements.querySelector(".country");
		const currentPhone = document.querySelector(".phone");
		const fieldPhone = document.querySelector(".jquery-once-4-processed");
					
		selectContactPhone.addEventListener("click", function() {
			if (currentCountry == "Australia" && currentPhone == "+61 2 6188 8118"){
				document.querySelector(".jquery-once-4-processed") = '+06-1111-1111';
				
			}
		});
			}