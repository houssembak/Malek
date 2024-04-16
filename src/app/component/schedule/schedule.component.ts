import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/service/schedule.service';
import { DatePipe } from '@angular/common'; // Importez DatePipe

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  schedules: any[] = [];
  daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  matieres: string[] = [];

  constructor(private scheduleService: ScheduleService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.scheduleService.getAllSchedules()
      .subscribe(data => {
        this.schedules = data;
        this.extractMatieres();
      });
  }

  extractMatieres(): void {
    this.matieres = [...new Set(this.schedules.flatMap(schedule => schedule.matiere))];
  }

  hasSchedule(day: string, matiere: string): boolean {
    return this.schedules.some(schedule => schedule.daysOfWeek.includes(day) && schedule.matiere.includes(matiere));
  }

  getScheduleTime(day: string, matiere: string): string {
    const schedule = this.schedules.find(s => s.daysOfWeek.includes(day) && s.matiere.includes(matiere));
    const startTimeFormatted = this.datePipe.transform(schedule.startTime, 'shortTime');
    const endTimeFormatted = this.datePipe.transform(schedule.endTime, 'shortTime');
    return `${startTimeFormatted} - ${endTimeFormatted}`;
  }
}
