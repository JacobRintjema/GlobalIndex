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
      formatter: function (): any {
        return '<span style="font-size: 10px">(Click for details)</span>';
      }
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
        ['fo', 0],
        ['um', 0],
        ['us', 0],
        ['jp', 0],
        ['sc', 0],
        ['in', 0],
        ['fr', 0],
        ['fm', 0],
        ['cn', 0],
        ['pt', 0],
        ['sw', 0],
        ['sh', 0],
        ['br', 0],
        ['ki', 0],
        ['ph', 0],
        ['mx', 0],
        ['es', 0],
        ['bu', 0],
        ['mv', 0],
        ['sp', 0],
        ['gb',0],
        ['gr',0],
        ['as',0],
        ['dk',0],
        ['gl',0],
        ['gu',0],
        ['mp',0],
        ['pr',0],
        ['vi',0],
        ['ca',0],
        ['st',0],
        ['cv',0],
        ['dm',0],
        ['nl',0],
        ['jm',0],
        ['ws',0],
        ['om',0],
        ['vc',0],
        ['tr',0],
        ['bd',0],
        ['lc',0],
        ['nr',0],
        ['no',0],
        ['kn',0],
        ['bh',0],
        ['to',0],
        ['fi',0],
        ['id',0],
        ['mu',0],
        ['se',0],
        ['tt',0],
        ['my',0],
        ['pa',0],
        ['pw',0],
        ['tv',0],
        ['mh',0],
        ['cl',0],
        ['th',0],
        ['gd',0],
        ['ee',0],
        ['ag',0],
        ['tw',0],
        ['bb',0],
        ['it',0],
        ['mt',0],
        ['vu',0],
        ['sg',0],
        ['cy',0],
        ['lk',0],
        ['km',0],
        ['fj',0],
        ['ru',0],
        ['va',0],
        ['sm',0],
        ['kz',0],
        ['az',0],
        ['tj',0],
        ['ls',0],
        ['uz',0],
        ['ma',0],
        ['co',0],
        ['tl',0],
        ['tz',0],
        ['ar',0],
        ['sa',0],
        ['pk',0],
        ['ye',0],
        ['ae',0],
        ['ke',0],
        ['pe',0],
        ['do',0],
        ['ht',0],
        ['pg',0],
        ['ao',0],
        ['kh',0],
        ['vn',0],
        ['mz',0],
        ['cr',0],
        ['bj',0],
        ['ng',0],
        ['ir', 0],
        ['sv', 0],
        ['sl', 0],
        ['gw', 0],
        ['hr', 0],
        ['bz', 0],
        ['za', 0],
        ['cf', 0],
        ['sd', 0],
        ['cd', 0],
        ['kw', 0],
        ['de', 0],
        ['be', 0],
        ['ie', 0],
        ['kp', 0],
        ['kr', 0],
        ['gy', 0],
        ['hn', 0],
        ['mm', 0],
        ['ga', 0],
        ['gq', 0],
        ['ni', 0],
        ['lv', 0],
        ['ug', 0],
        ['mw', 0],
        ['am', 0],
        ['sx', 0],
        ['tm', 0],
        ['zm', 0],
        ['nc', 0],
        ['mr', 0],
        ['dz', 0],
        ['lt', 0],
        ['et', 0],
        ['er', 0],
        ['gh', 0],
        ['si', 0],
        ['gt', 0],
        ['ba', 0],
        ['jo', 0],
        ['sy', 0],
        ['mc', 0],
        ['al', 0],
        ['uy', 0],
        ['cnm', 0],
        ['mn', 0],
        ['rw', 0],
        ['so', 0],
        ['bo', 0],
        ['cm', 0],
        ['cg', 0],
        ['eh', 0],
        ['rs', 0],
        ['me', 0],
        ['tg', 0],
        ['la', 0],
        ['af', 0],
        ['ua', 0],
        ['sk', 0],
        ['jk', 0],
        ['bg', 0],
        ['qa', 0],
        ['li', 0],
        ['at', 0],
        ['sz', 0],
        ['hu', 0],
        ['ro', 0],
        ['ne', 0],
        ['lu', 0],
        ['ad', 0],
        ['ci', 0],
        ['lr', 0],
        ['bn', 0],
        ['iq', 0],
        ['ge', 0],
        ['gm', 0],
        ['ch', 0],
        ['td', 0],
        ['kv', 0],
        ['lb', 0],
        ['dj', 0],
        ['bi', 0],
        ['sr', 0],
        ['il', 0],
        ['ml', 0],
        ['sn', 0],
        ['gn', 0],
        ['zw', 0],
        ['pl', 0],
        ['mk', 0],
        ['py', 0],
        ['by', 0],
        ['cz', 0],
        ['bf', 0],
        ['na', 0],
        ['ly', 0],
        ['tn', 0],
        ['bt', 0],
        ['md', 0],
        ['ss', 0],
        ['bw', 0],
        ['bs', 0],
        ['nz', 0],
        ['cu', 0],
        ['ec', 0],
        ['au', 0],
        ['ve', 0],
        ['sb', 0],
        ['mg', 0],
        ['is', 0],
        ['eg', 0],
        ['kg', 0],
        ['np', 0]
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
