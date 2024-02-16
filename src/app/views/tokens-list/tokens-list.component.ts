import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tokens-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tokens-list.component.html',
  styleUrl: './tokens-list.component.scss'
})
export class TokensListComponent {
  firestore: Firestore = inject(Firestore);
}
