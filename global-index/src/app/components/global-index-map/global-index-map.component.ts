import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts/highmaps";
declare var require: any;
import MapModule from 'highcharts/modules/map';
import { Country } from 'src/app/enums/Country';
import { EventBusService } from 'src/app/services/EventBusService/event-bus.service';
import { GlobalIndexPopulationDataService } from 'src/app/services/global-index-population-data-service/global-index-population-data.service';
const worldMap = require('@highcharts/map-collection/custom/world.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-global-index-map',
  templateUrl: './global-index-map.component.html',
  styleUrls: ['./global-index-map.component.scss']
})
export class GlobalIndexMapComponent implements OnInit {
  message!: string;
  populationData: any[] = [];
  data: any[] = [];
  chart: any;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartCallback: any;
  chartOptions: any = {
    chart: {
      map: worldMap
    },
    legend: {
      enabled: false
    },
    title: {
      text: 'Global Index for NCD Interventions in PHC'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        // alignTo: 'spacingBox'
      }
    },
    colorAxis: {
      min: 0
    },
    tooltip: {
      headerFormat: '{point.name}',
      footerFormat: '<span style="font-size: 10px">(Click for details)</span>'
      /*
      formatter: function (): any {
        return '<span style="font-size: 10px">(Click for details)</span>';
      }
      */
    },
    series: [{
      //name: 'Population Data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      
      point: {
        events: {
          click: (e: any) => {
            this.eventBus.dataSource.next(e);
          },
        },
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: true,
      type: undefined,
      data: [
        ['fo', undefined],
        ['um', undefined],
        ['us', undefined],
        ['jp', undefined],
        ['sc', undefined],
        ['in', undefined],
        ['fr', undefined],
        ['fm', undefined],
        ['cn', undefined],
        ['pt', undefined],
        ['sw', undefined],
        ['sh', undefined],
        ['br', undefined],
        ['ki', undefined],
        ['ph', undefined],
        ['mx', undefined],
        ['es', undefined],
        ['bu', undefined],
        ['mv', undefined],
        ['sp', undefined],
        ['gb',undefined],
        ['gr',undefined],
        ['as',undefined],
        ['dk',undefined],
        ['gl',undefined],
        ['gu',undefined],
        ['mp',undefined],
        ['pr',undefined],
        ['vi',undefined],
        ['ca',undefined],
        ['st',undefined],
        ['cv',undefined],
        ['dm',undefined],
        ['nl',undefined],
        ['jm',undefined],
        ['ws',undefined],
        ['om',undefined],
        ['vc',undefined],
        ['tr',undefined],
        ['bd',undefined],
        ['lc',undefined],
        ['nr',undefined],
        ['no',undefined],
        ['kn',undefined],
        ['bh',undefined],
        ['to',undefined],
        ['fi',undefined],
        ['id',undefined],
        ['mu',undefined],
        ['se',undefined],
        ['tt',undefined],
        ['my',undefined],
        ['pa',undefined],
        ['pw',undefined],
        ['tv',undefined],
        ['mh',undefined],
        ['cl',undefined],
        ['th',undefined],
        ['gd',undefined],
        ['ee',undefined],
        ['ag',undefined],
        ['tw',undefined],
        ['bb',undefined],
        ['it',undefined],
        ['mt',undefined],
        ['vu',undefined],
        ['sg',undefined],
        ['cy',undefined],
        ['lk',undefined],
        ['km',undefined],
        ['fj',undefined],
        ['ru',undefined],
        ['va',undefined],
        ['sm',undefined],
        ['kz',undefined],
        ['az',undefined],
        ['tj',undefined],
        ['ls',undefined],
        ['uz',undefined],
        ['ma',undefined],
        ['co',undefined],
        ['tl',undefined],
        ['tz',undefined],
        ['ar',undefined],
        ['sa',undefined],
        ['pk',undefined],
        ['ye',undefined],
        ['ae',undefined],
        ['ke',undefined],
        ['pe',undefined],
        ['do',undefined],
        ['ht',undefined],
        ['pg',undefined],
        ['ao',undefined],
        ['kh',undefined],
        ['vn',undefined],
        ['mz',undefined],
        ['cr',undefined],
        ['bj',undefined],
        ['ng',undefined],
        ['ir', undefined],
        ['sv', undefined],
        ['sl', undefined],
        ['gw', undefined],
        ['hr', undefined],
        ['bz', undefined],
        ['za', undefined],
        ['cf', undefined],
        ['sd', undefined],
        ['cd', undefined],
        ['kw', undefined],
        ['de', undefined],
        ['be', undefined],
        ['ie', undefined],
        ['kp', undefined],
        ['kr', undefined],
        ['gy', undefined],
        ['hn', undefined],
        ['mm', undefined],
        ['ga', undefined],
        ['gq', undefined],
        ['ni', undefined],
        ['lv', undefined],
        ['ug', undefined],
        ['mw', undefined],
        ['am', undefined],
        ['sx', undefined],
        ['tm', undefined],
        ['zm', undefined],
        ['nc', undefined],
        ['mr', undefined],
        ['dz', undefined],
        ['lt', undefined],
        ['et', undefined],
        ['er', undefined],
        ['gh', undefined],
        ['si', undefined],
        ['gt', undefined],
        ['ba', undefined],
        ['jo', undefined],
        ['sy', undefined],
        ['mc', undefined],
        ['al', undefined],
        ['uy', undefined],
        ['cnm', undefined],
        ['mn', undefined],
        ['rw', undefined],
        ['so', undefined],
        ['bo', undefined],
        ['cm', undefined],
        ['cg', undefined],
        ['eh', undefined],
        ['rs', undefined],
        ['me', undefined],
        ['tg', undefined],
        ['la', undefined],
        ['af', undefined],
        ['ua', undefined],
        ['sk', undefined],
        ['jk', undefined],
        ['bg', undefined],
        ['qa', undefined],
        ['li', undefined],
        ['at', undefined],
        ['sz', undefined],
        ['hu', undefined],
        ['ro', undefined],
        ['ne', undefined],
        ['lu', undefined],
        ['ad', undefined],
        ['ci', undefined],
        ['lr', undefined],
        ['bn', undefined],
        ['iq', undefined],
        ['ge', undefined],
        ['gm', undefined],
        ['ch', undefined],
        ['td', undefined],
        ['kv', undefined],
        ['lb', undefined],
        ['dj', undefined],
        ['bi', undefined],
        ['sr', undefined],
        ['il', undefined],
        ['ml', undefined],
        ['sn', undefined],
        ['gn', undefined],
        ['zw', undefined],
        ['pl', undefined],
        ['mk', undefined],
        ['py', undefined],
        ['by', undefined],
        ['cz', undefined],
        ['bf', undefined],
        ['na', undefined],
        ['ly', undefined],
        ['tn', undefined],
        ['bt', undefined],
        ['md', undefined],
        ['ss', undefined],
        ['bw', undefined],
        ['bs', undefined],
        ['nz', undefined],
        ['cu', undefined],
        ['ec', undefined],
        ['au', undefined],
        ['ve', undefined],
        ['sb', undefined],
        ['mg', undefined],
        ['is', undefined],
        ['eg', undefined],
        ['kg', undefined],
        ['np', undefined]
      ] 
    }]
  }

  constructor(
    private populationService: GlobalIndexPopulationDataService,
    private eventBus: EventBusService
  ) {
    const self = this;

    this.chartCallback = (chart: any) => {
      self.chart = chart;
    };
  }

  ngOnInit() {
    
  }

  public getPopulationData(): void {
    this.populationService.getInfo().subscribe((csv: any) => {
      csv = csv.split(/\n/);

      var countries: any = {},
      mapChart: any,
      mapChart: any,
      numRegex = /^[0-9\.]+$/,
      lastCommaRegex = /,\s$/,
      quoteRegex = /\"/g,
      categories = this.CSVtoArray(csv[2]).slice(4);

      // Parse the CSV into arrays, one array each country
      csv.slice(3).forEach( (line: any) => {
        var row = this.CSVtoArray(line),
          data = row.slice(4);

        data.forEach(function(val: any, i: any) {
          val = val.replace(quoteRegex, '');
          if (numRegex.test(val)) {
            val = parseInt(val, 10);
          } else if (!val || lastCommaRegex.test(val)) {
            val = null;
          }
          data[i] = val;
        });

        countries[row[1]] = {
          name: row[0],
          code3: row[1],
          data: data
        };
      });
      
      for (var code3 in countries) {
        if (Object.hasOwnProperty.call(countries, code3)) {
          var value = null,
            year,
            itemData = countries[code3].data,
            i = itemData.length;
  
          while (i--) {
            if (typeof itemData[i] === 'number') {
              value = itemData[i];
              year = categories[i];
              break;
            }
          }
        }
        this.data.push({
          name: countries[code3].name,
          code3: code3,
          value: value,
          year: year
        });
      }

      var populationData: any[] = [];
      // Clean this.data
      for(var j = 0; j < this.data.length - 1; j++) {
        const name: string = this.data[j]['name'];

        if(!populationData.includes(name)) {
          for(var k = j + 1; k < this.data.length - 1; k++) {
            if(this.data[k]['name'] === name) {
              
              var key: string = this.data[j]['hc-key'];
              var population: number = this.data[k]['value'];
              populationData.push([
                key,
                population
              ])
            }
          }
        }
      }

      // populationData.sort((a, b) => (a[0] > b[0]) ? 1 : -1);
      this.data = populationData;
      this.chartOptions.series = [{
        data: this.data,
        name: 'Population Data',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        },
        allAreas: true,
        type: undefined,
      }];
      this.updateFromInput = true;
  
    });
    
  }

  public CSVtoArray(text: string): string[] {
    return text.replace(/^"/, '')
      .replace(/",$/, '')
      .split('","');
  }
}
