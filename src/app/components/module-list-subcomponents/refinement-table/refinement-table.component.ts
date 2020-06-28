import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RefinementListService } from '../../../services/refinement-list.service';

@Component({
  selector: 'app-refinement-table',
  templateUrl: './refinement-table.component.html',
  styleUrls: ['./refinement-table.component.css']
})
export class RefinementTableComponent implements OnInit {

  public selectorList: string[] = ['Faculty', 'Department', 'ModuleCredit', 'Level'];

  public facultyList: any = {
    'A':['Arts and Social Science'],
    'C':['Computing', 'Cont and Lifelong Education'],
    'D':['Dentistry', 'Design and Environment', 'Duke-NUS Medical School'],
    'E':['Engineering'],
    'I':['Institute of Systems Science'],
    'L':['LKY School of Public Policy',
    'Logistics Inst-Asia Pac'],
    'M':['Multi Disciplinary Programme'],
    'N':['NUS',
    'NUS Business School',
    'NUS Graduate Sch for Int Science and Engineering'],
    'R':['Residential College',
    'Risk Management Institute',],
    'S':['Science',
    'SSH School of Public Health',],
    'T':['Temasek Defence Sys. Institute',],
    'U':['University Scholars Programme',],
    'Y':['Yale-NUS College',
    'Yong Loo Lin Sch of Medicine',
    'YST Conservatory of Music']
  }

  public more: any = {
    Faculty: false,
    Department: false
  }

  public conditionList: any = {
    'Department': [
      'Accounting',
      'Architecture',
      'Chemistry',
      'Civil and Environmental Engineering',
      'Computer Science',
      'Mathematics',
      'Mechanical Engineering',
      'Pharmacy',
    ],
    'Faculty': [
      'Arts and Social Science',
      'NUS Business School',
      'Computing',
      'Dentistry',
      'Engineering',
      'Law',
      'Science',
    ],
    'ModuleCredit': [
      '0-3 MC', '4 MC', '5-8 MC', 'More than 8 MC'
    ],
    'Level': [
      '1000', '2000', '3000', '4000', '5000', '6000'
    ]
  };


  public initialList: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  public departmentList: any = {
    'A':
      ['Accounting',
        'Alice Lee Center for Nursing Studies',
        'Analytics and Operations',
        'Anatomy',
        'Architecture',],
    'B':
      ['Biochemistry',
        'Biological Sciences',
        'Biomedical Engineering',
        'BIZ Dean\'s Office',
        'Building'],
    'C':
      ['Center for Engl Lang Comms',
        'Center for Quantum Technologies',
        'Centre for Language Studies',
        'Chemical and Biomolecular Engineering',
        'Chemistry',
        'Chinese Studies',
        'Chua Thian Poh Comm Leader Center',
        'Civil & Environmental Engineering',
        'College of Alice and Peter Tan',
        'Communications and New Media',
        'Computer Science',
        'Computing and Engineering Programme',],
    'D':
      ['Division of Graduate Dental Studies',
        'Division of Graduate Medical Studies',
        'Duke-NUS Dean\'s Office'],
    'E':
      ['Economics',
        'Electrical and Computer Engineering',
        'Engineering Science Programme',
        'English Language and Literature',],
    'F':
    [
    'FASS Dean\'s Office/Office of Programmes',
        'Finance',
        'FoD Dean\'s Office',
        'FoE Dean\'s Office',
        'FoL Dean\'s Office',
        'Food Science and Technology',
        'FoS Dean\'s Office',
      ],
    'G':
      ['Geography'],
    'H':
      [
        'History',],
    'I':
        ['Industrial Design',
        'Industrial Systems Engineering and Management',
        'Information Systems and Analytics',
        'Institute of Systems Science'],
    'J':
      ['Japanese Studies'],
    'L':
      ['LKYSPP Dean\'s Office',
        'Logistics Inst - Asia Pac'],
    'M':
      ['Malay Studies',
        'Management and Organisation',
        'Marketing',
        'Materials Science and Engineering',
        'Mathematics',
        'Mechanical Engineering',
        'Mechanobiology Institute (MBI)',
        'Microbiology and Immunology'],
    'N':
      ['NGS Dean\'s Office',
        'NUS Entrepreneurship Centre',
        'NUS Medicine Dean\'s Office'],
    'O':
      ['Office of Sr Dy Pres and Provost'],
    'P':
      ['Pathology',
        'Pharmacology',
        'Pharmacy',
        'Philosophy',
        'Physics',
        'Physiology',
        'Political Science',
        'Psychology'],
    'R':
      ['Real Estate',
        'Residential College 4',
        'Risk Management Institute'],
    'S':
        ['SCALE Dean\'s Office',
        'SDE Dean\'s Office',
        'SoC Dean\'s Office',
        'Social Work',
        'Sociology',
        'South Asian Studies',
        'Southeast Asian Studies',
        'SSH School of Public Health Dean\'s Office',
        'Statistics and Applied Probability',
        'Strategy and Policy'],
    'T':
      [
        'Temasek Defence Systems Inst',
        'Tembusu College'
      ],
    'U':
        ['University Scholars Programme'],
    'Y':
      ['Yale-NUS College',
    'YSTCM Dean\'s Office'],
  }

  public fullList: any = {
    Faculty: this.facultyList,
    Department: this.departmentList
  }


  @Output() sendMore = new EventEmitter<string>();
  @Output() sendCloseDrawer = new EventEmitter();

  constructor(public refinementListService: RefinementListService) { }

  ngOnInit(): void {
  }

  addRefinement(selector: string, refinement: string) {
    this.refinementListService.addRefinement(selector, refinement);
  }

  showMore(selector: string) {
    this.more[selector] = true; 
    this.sendMore.emit(this.more);
  }

  showLess(selector: string) {
    this.more[selector] = false; 
    this.sendMore.emit(this.more);
  }

  closeDrawer() {
    this.sendCloseDrawer.emit();
    this.resetMore();
  }

  resetMore() {
    this.more = {
      'Department': false,
      'Faculty': false
    }
    this.sendMore.emit(this.more);
  }
}
