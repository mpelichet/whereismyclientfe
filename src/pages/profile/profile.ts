import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityPage } from '../charityInfo/charityInfo';
import { Charity } from '../models.ts/Charity';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public charities: Array<Charity> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.username = navParams.get('username');

        var SchistosomiasisControlInitiative = new Charity();
        SchistosomiasisControlInitiative.name = "Schistosomiasis Control Initiative";
        SchistosomiasisControlInitiative.description = "The Schistosomiasis Control Initiative (SCI), at Imperial College London, is a non-profit initiative that works with Ministries of Health in sub-Saharan African countries and Yemen. It supports and evaluates treatment programmes against schistosomiasis and soil-transmitted helminthiasis.";
        SchistosomiasisControlInitiative.logourl = "https://yt3.ggpht.com/a-/AJLlDp0IwdEtAAhi271YFTwwAZJycfUD1h6FNQtGzw=s900-mo-c-c0xffffffff-rj-k-no";
        SchistosomiasisControlInitiative.siteurl = "https://www.imperial.ac.uk/schistosomiasis-control-initiative";
        var AgainstMalariaFoundation = new Charity();
        AgainstMalariaFoundation.name = "Against Malaria Foundation";
        AgainstMalariaFoundation.description = "The Against Malaria Foundation (AMF) is a United Kingdom-based charity that provides long-lasting insecticidal nets (LLINs) to populations at high risk of malaria, primarily in Africa.";
        AgainstMalariaFoundation.logourl = "data:image/png;base64,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";
        AgainstMalariaFoundation.siteurl = "https://www.againstmalaria.com/";
        var TheHumaneLeague = new Charity();
        TheHumaneLeague.name = "The Human League";
        TheHumaneLeague.description = "The Schistosomiasis Control Initiative (SCI), at Imperial College London, is a non-profit initiative that works with Ministries of Health in sub-Saharan African countries and Yemen. It supports and evaluates treatment programmes against schistosomiasis and soil-transmitted helminthiasis.";
        TheHumaneLeague.logourl = "data:image/png;base64,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";
        TheHumaneLeague.siteurl = "https://www.imperial.ac.uk/schistosomiasis-control-initiative";
        this.charities.push(SchistosomiasisControlInitiative);
        this.charities.push(AgainstMalariaFoundation);
        this.charities.push(TheHumaneLeague);
    }

    username: string;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;

    navigatetoHome() {
        this.navCtrl.push(HomePage);
    }


    navigateToCharity(charity: Charity) {

        this.navCtrl.push(CharityPage, {
            charity: charity
        });
    }
}
