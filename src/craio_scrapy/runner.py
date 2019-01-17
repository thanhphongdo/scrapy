import scrapy
import xmltodict, json
from craio_scrapy.spiders.rss_spider import RssSpider
from scrapy.crawler import CrawlerProcess

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
})

process.crawl(RssSpider)
process.start() # the script will block here until the crawling is finished