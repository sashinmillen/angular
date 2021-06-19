import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
	`
		<form>
			<div class="field">
				<label>Name:</label>
				<input type="text" name="name" [(ngModel)]="form.name" />
			</div>

			<div class="field">
				<label>Email:</label>
				<input type="text" name="email" [(ngModel)]="form.email" />
			</div>
			
			<div class="actions">
				<button type="submit">
					Process Form
				</button>
			</div>
		</form>
	`,
  styleUrls: ['./my-app.component.scss']
})
export class MyAppComponent {

  public form: {
		name: string;
		email: string;
	};
 
	// I initialize the app component.
	constructor() {
 
		this.form = {
			name: "",
			email: "",
		};

  }

}
