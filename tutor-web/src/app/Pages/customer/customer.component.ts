import { Component, OnInit } from '@angular/core';
interface Location {
  value: string;
  viewValue: string;
}


interface Subject {
  value: string;
  viewValue: string;
}

interface Form {
  value: string;
  viewValue: string;
}

interface Gender {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  locations: Location[] = [
    {value: 'haNoi-0', viewValue: 'Hà Nội '},
    {value: 'hoChiMinh-1', viewValue: 'Hồ Chí Minh'},
    {value: 'daNang-2', viewValue: 'Đà Nẵng'},
    {value: 'canTho-2', viewValue: 'Cần Thơ'},
  ];

  subjects: Subject[] = [
    {value: 'toan-0', viewValue: 'Toán'},
    {value: 'ly-1', viewValue: 'Lý'},
    {value: 'hoa-2', viewValue: 'Hóa'},
    {value: 'van-3', viewValue: 'Văn'},
      {value: 'su-4', viewValue: 'Sử'},
      {value: 'dia-5', viewValue: 'Địa'},
      {value: 'sinh-6', viewValue: 'Sinh'},
      {value: 'other-7', viewValue: 'Môn phố thông khác'},
  ];
  forms: Form[] = [
    {value: 'online-0', viewValue: 'Trực tuyến (online)'},
    {value: 'offline-1', viewValue: 'Trực tiếp (offline)'},
  ];

  genders: Gender[] = [
    {value: 'nam-0', viewValue: 'Nam'},
    {value: 'nu-1', viewValue: 'Nữ'},
  ];
}
