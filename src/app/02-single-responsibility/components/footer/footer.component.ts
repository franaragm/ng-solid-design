import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  form = this.formBuilder.group({
    task: '',
  });
  submitButtonText = 'ADD TODO';
  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.taskService.tasks.length !== 99) {
      this.taskService.tasks.push(this.form.value);
    }
  }
}
