from __future__ import absolute_import
from __future__ import division, print_function, unicode_literals
from sumy.utils import get_stop_words
from sumy.nlp.stemmers import Stemmer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.tokenizers import Tokenizer
from sumy.parsers.plaintext import PlaintextParser
from sumy.parsers.html import HtmlParser
import math


def summaryFromUrl(url, percentOfOriginal=50):
    LANGUAGE = 'english'

    #  get html data from the url
    parser = HtmlParser.from_url(url, Tokenizer(LANGUAGE))
    totalSentences = len(parser.document.sentences)

    SENTENCES_COUNT = math.trunc(totalSentences * percentOfOriginal/100)

    stemmer = Stemmer(LANGUAGE)

    summarizer = Summarizer(stemmer)

    # defintion of stop words: http://xpo6.com/list-of-english-stop-words/
    summarizer.stop_words = get_stop_words(LANGUAGE)

    summaryTuple = summarizer(parser.document, SENTENCES_COUNT)
    summaryArr = []
    for sentence in summaryTuple:
        summaryArr.append(sentence.__unicode__())
    return summaryArr
