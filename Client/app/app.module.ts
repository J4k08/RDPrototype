import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http'
import { AppComponent }  from './app.component';
import { RoomsComponent }from './components/rooms/rooms.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports:         [ BrowserModule, HttpModule, FormsModule ],
    declarations:    [ AppComponent, RoomsComponent],
    bootstrap:       [ AppComponent]
})
export class AppModule { }