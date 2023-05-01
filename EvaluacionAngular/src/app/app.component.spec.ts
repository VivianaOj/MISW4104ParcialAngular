import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { Router, Routes } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';


@Component({
  selector: 'app-planta-list',
  template: `PlantaList`
})
export class PlantaListComponent {
}
export const routes: Routes = [
  {path: 'plantas/list', component: PlantaListComponent},
];


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [AppComponent, PlantaListComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should have as title Vivero el otoño', () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Vivero el otoño');
  });

  it('should have a banner with an image of planta', () => {
    const imgs = fixture.debugElement.queryAll(By.css('.row .col img'));
    expect(imgs).toHaveSize(1);
  });

  it('should have contact phone)', () => {
    const footers = fixture.debugElement.queryAll(By.css('footer'));
    expect(footers).toHaveSize(1);

    const footer = footers[0];
    expect(footer.nativeElement.textContent).toBe("Contact us: +57 3102105253 - info@viveroelotonio.com - @viveroelotonio ");
  });

});
