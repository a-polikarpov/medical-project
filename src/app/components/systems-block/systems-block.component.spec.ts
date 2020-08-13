import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemsBlockComponent } from './systems-block.component';
import { MedicalService } from "../../services/medical.service";

describe('SystemsBlockComponent', () => {
  let component: SystemsBlockComponent;
  let fixture: ComponentFixture<SystemsBlockComponent>;
  let medicalService: MedicalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemsBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsBlockComponent);
    component = fixture.componentInstance;
    medicalService = fixture.debugElement.injector.get<MedicalService>(MedicalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke startObserveData',  () => {
    spyOn(component['medicalService'], 'startObserveData').and.callThrough();
    component.ngOnInit()
    fixture.detectChanges();
    expect(component['medicalService'].startObserveData).toHaveBeenCalled();
  })

});
