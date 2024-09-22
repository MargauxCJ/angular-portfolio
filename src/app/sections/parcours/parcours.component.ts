import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogParcours } from '../../modals/modals';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [],
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.scss'
})
export class ParcoursComponent {
  readonly dialog = inject(MatDialog);

  openDialogParcours(infos: "BTS"|"Bachelor"|"Forlabs") {
    const dialogRef = this.dialog.open(DialogParcours, {
      data: infos,
    });

    dialogRef.afterClosed().subscribe();
  }
}
