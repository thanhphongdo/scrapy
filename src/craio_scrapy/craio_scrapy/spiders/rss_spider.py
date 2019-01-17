import scrapy
import xmltodict, json

class RssSpider(scrapy.Spider):
    name = "quotes"

    def start_requests(self):
        urls = [
            'https://vnexpress.net/rss/tin-moi-nhat.rss'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        # page = response.url.split("/")[-2]
        # filename = 'quotes-%s.html' % page
        # with open(filename, 'wb') as f:
        #     f.write(response.body)
        # self.log('Saved file %s' % filename)s
        # self.log(response.body)
        data = xmltodict.parse(response.body)
        self.log('======================')
        self.log(data['rss']['channel']['item'])