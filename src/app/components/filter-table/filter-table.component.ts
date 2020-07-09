import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.css']
})
export class FilterTableComponent implements OnInit {

  public filterList: string[] = ['Faculty', 'Department', 'Module Credit', 'Level'];

  public conditionList: any = {
    'Faculty': [
      'Arts & Social Sciences',
      'Business',
      'Computing',
      'Dentistry',
      'Engineering',
      'Law',
      'Medicine',
      'Music',
      'Public Health',
      'Public Policy',
      'Science',
    ],
    'Department': [
      'Arts & Social Sciences',
      'Business',
      'Computing',
      'Dentistry',
      'Engineering',
      'Law',
      'Medicine',
      'Music',
      'Public Health',
      'Science',
    ],
    'Module Credit': [
      '0-3 MC', '4 MC', '5-8 MC', 'More than 8 MC'
    ],
    'Level': [
      '1000', '2000', '3000', '4000', '5000', '6000'
    ]
  }

  public initialList: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
    'J', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'U', 'Y']

  public facultyList: any = {
    'A':
      ['Accounting',
        'Admissions',
        'Alumni Relations',
        'Anaesthesia',
        'Analytics and Operations',
        'Anatomy',
        'Architecture',
        'Arts & Social Sciences'],
    'B':
      ['Biochemistry',
        'Biological Sciences',
        'Biomedical Engineering',
        'Board of Trustees Secretariat',
        'Building', 'Business'],
    'C':
      ['Campus Amenities',
        'Campus Infrastructure',
        'Campus Security',
        'Central Procurement Office',
        'Chemical & Biomolecular Engineering',
        'Chemistry',
        'Chinese Studies',
        'Civil & Environmental Engineering',
        'Communications & New Media',
        'Computer Science',
        'Computing',
        'Conferences and Events Management Unit',
        'Continuing and Lifelong Education'],
    'D':
      ['Dentistry',
        'Design & Environment',
        'Development of Teaching & Learning',
        'Development Office',
        'Diagnostic Radiology',
        'Duke-NUS'],
    'E':
      ['Economics',
        'Electrical & Computer Engineering',
        'Engineering',
        'Engineering & Technology Management',
        'English Language Communication',
        'English Language & Literature',
        'Enterprise',
        'Environmental Sustainability',
        'Estate Development'],
    'F':
      ['Facilities Management',
        'Finance',
        'Finance Office',
        'Future-Ready Graduates'],
    'G':
      ['Geography'],
    'H':
      ['Health Centre',
        'History',
        'Housing Services',
        'Human Resources'],
    'I':
      ['Industrial & Systems Engineering',
        'Industrial Design',
        'Industry Liaison',
        'Information Systems & Analytics',
        'Institute of Systems Science',
        'Instructional Technology',
        'Internal Audit',
        'International Relations',
        'Investment'],
    'J':
      ['Japanese Studies',
        'Language Studies'],
    'L':
      ['Law',
        'Legal Affairs'],
    'M':
      ['Malay Studies',
        'Management & Organisation',
        'Marketing',
        'Materials Science & Engineering',
        'Mathematics',
        'Mechanical Engineering',
        'Medicine',
        'Microbiology',
        'Music'],
    'N':
      ['Natural History Museum',
        'Nursing Studies',
        'NUS Centre For the Arts',
        'NUS Entrepreneurship Centre',
        'NUS Information Technology',
        'NUS Libraries',
        'NUS Museum',
        'NUS Overseas Colleges',
        'NUS Press'],
    'O':
      ['Obstetrics & Gynaecology',
        'Ophthalmology',
        'Orthopaedic Surgery',
        'Otolaryngology'],
    'P':
      ['Paediatrics',
        'Pathology',
        'Pharmacology',
        'Pharmacy',
        'Philosophy',
        'Physics',
        'Physiology',
        'Political Science',
        'President',
        'Privacy and Compliance',
        'Provost',
        'Psychological Medicine',
        'Psychology',
        'Public Health',
        'Public Policy'],
    'R':
      ['Real Estate',
        'Registrar',
        'Research & Technology',
        'Risk Management'],
    'S':
      ['Safety, Health & Environment',
        'Science',
        'Social Work',
        'Sociology',
        'South Asian Studies Programme',
        'Southeast Asian Studies',
        'Sports and UTown Management',
        'Statistics & Applied Probability',
        'Strategy & Policy',
        'Student Affairs',
        'Surgery'],
    'U':
      ['University Communications',
        'University & Global Relations',
        'University Scholars Programme',
        'University Town Management'],
    'Y':
      ['Yale-NUS College'],
  }

  public departmentList: any = [
    'Arts & Social Sciences',
    'Business',
    'Computing',
    'Continuing and Lifelong Education',
    'Dentistry',
    'Design & Environment',
    'Duke-NUS',
    'Engineering',
    'Integrative Sciences & Engineering',
    'Law',
    'Medicine',
    'Music',
    'Public Health',
    'Public Policy',
    'Science',
    'University Scholars Programme',
    'Yale-NUS',
  ]

  public more: any = {
    moreFaculty: false,
    moreDepartment: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeMore(event: any, filter: string) {
    this.more['more' + filter] = !this.more['more' + filter];
    event.target.innerText = event.target.innerText == 'more' ? 'less' : 'more';
  }

}
