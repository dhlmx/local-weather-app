import { TestBed } from '@angular/core/testing';
import { WeatherServiceFake } from './weather.service.fake';

describe('WeatherServiceFake', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherServiceFake = TestBed.get(WeatherServiceFake);
    expect(service).toBeTruthy();
  });
});
