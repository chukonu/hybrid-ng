import { Component, OnInit } from '@angular/core';
import { Agent } from '../agent';

@Component({
  selector: 'app-agent-table',
  templateUrl: './agent-table.component.html',
  styleUrls: ['./agent-table.component.css']
})
export class AgentTableComponent implements OnInit {

  agents: [Agent];

  constructor() {
    this.agents = [
      new Agent('Ashley'),
      new Agent('Bob'),
      new Agent('Cat'),
      new Agent('David')
    ];
  }

  ngOnInit() {
  }

  add(name: string) {
    this.agents.push(new Agent(name));
  }

}
