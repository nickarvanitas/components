import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'ui-alert',
  imports: [],
  template: `
    <div [class]="classes()">
      <div class="flex gap-x-1.5">
        <div class="flex items-center justify-center size-6">
          <i [class]="iconClass() + ' ' + textAndIconColorClass()"></i>
        </div>
        <div class="flex flex-col">
          <h3 [class]="textAndIconColorClass() + ' text-md font-medium'">{{ title() }}</h3>
          @if (message()) {
            <p [class]="textAndIconColorClass() + ' text-sm'">{{ message() }}</p>
          }
        </div>
      </div>
    </div>
  `,
})
export class Alert {
  severity = input<AlertSeverity>('info');
  title = input.required<string>();
  message = input<string>('');
  raised = input<boolean>(false);

  classes = computed(() => {
    const baseClass = `border rounded-md px-3 py-2.5`;
    const colorMap: Record<AlertSeverity, string> = {
      error: 'border-red-800 bg-red-50',
      warning: 'border-amber-800 bg-amber-50',
      info: 'border-blue-800 bg-blue-50',
      success: 'border-green-800 bg-green-50',
    };
    return `${baseClass} ${colorMap[this.severity()]} ${this.raised() ? this.shadowColor() + ' shadow-lg' : ''}`;
  });

  iconClass = computed(() => {
    const iconMap: Record<AlertSeverity, string> = {
      error: 'fa-solid fa-info-circle',
      warning: 'fa-solid fa-triangle-exclamation',
      info: 'fa-solid fa-info-circle',
      success: 'fa-solid fa-check',
    };
    return iconMap[this.severity()];
  });

  textAndIconColorClass = computed(() => {
    const colorMap: Record<AlertSeverity, string> = {
      error: 'text-red-900 text-red-800',
      warning: 'text-amber-900 text-amber-800',
      info: 'text-blue-900 text-blue-800',
      success: 'text-green-900 text-green-800',
    };
    return colorMap[this.severity()];
  });

  shadowColor = computed(() => {
    const colorMap: Record<AlertSeverity, string> = {
      error: 'shadow-red-700/5',
      warning: 'shadow-amber-700/5',
      info: 'shadow-blue-700/5',
      success: 'shadow-green-700/5',
    };
    return colorMap[this.severity()];
  });
}

type AlertSeverity = 'error' | 'warning' | 'info' | 'success';
