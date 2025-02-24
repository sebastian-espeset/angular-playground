import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BankDetailComponent } from '../bank-detail/bank-detail.component';
import { BANKS } from '../banks';
import { Bank } from '../bank';

@Component({
  selector: 'app-banks',
  standalone: true,
  imports: [NgFor, BankDetailComponent],
  templateUrl: './banks.component.html',
  styleUrl: './banks.component.css',
})
export class BanksComponent implements OnInit {
  banks = BANKS;
  selectedBank!: Bank;
  constructor() {}
  onSelect(bank: Bank): void {
    this.selectedBank = bank;
  }
  ngOnInit(): void {}
}
