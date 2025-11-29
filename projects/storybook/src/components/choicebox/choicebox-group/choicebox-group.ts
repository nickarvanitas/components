import { Component, input, model } from '@angular/core';
import { Stack } from '../../layout/stack/stack';
import { Choicebox } from '../choicebox/choicebox';

@Component({
  selector: 'ui-choicebox-group',
  imports: [Stack, Choicebox],
  template: `
    <ui-stack [direction]="direction()" gap="2">
      @for (choicebox of choiceboxes(); track choicebox.value) {
        <ui-choicebox 
          [title]="choicebox.title" 
          [description]="choicebox.description"
          [value]="choicebox.value" 
          [disabled]="choicebox.disabled" 
          [type]="type()"
          [name]="name()"
          [checked]="isChecked(choicebox.value)"
          (onChange)="handleChange(choicebox.value)"
        />
      }
    </ui-stack>
  `,
})
export class ChoiceboxGroup {
  direction = input<'row' | 'column'>('column');
  type = input<'radio' | 'checkbox'>('radio');
  name = input<string>('choicebox-group');
  choiceboxes = input<ChoiceboxOption[]>([]);
  
  // For radio: single value, for checkbox: array of values
  value = model<string | string[]>('');

  isChecked(choiceboxValue: string): boolean {
    if (this.type() === 'radio') {
      return this.value() === choiceboxValue;
    } else {
      return Array.isArray(this.value()) && this.value().includes(choiceboxValue);
    }
  }

  handleChange(choiceboxValue: string): void {
    if (this.type() === 'radio') {
      this.value.set(choiceboxValue);
    } else {
      const currentValues = Array.isArray(this.value()) ? this.value() as string[] : [];
      if (currentValues.includes(choiceboxValue)) {
        this.value.set(currentValues.filter(v => v !== choiceboxValue));
      } else {
        this.value.set([...currentValues, choiceboxValue]);
      }
    }
  }
}

export type ChoiceboxOption = {
  title: string;
  description?: string;
  value: string;
  disabled: boolean;
};
