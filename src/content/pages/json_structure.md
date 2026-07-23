FIELD	                    SHAPE	                        USED FOR
eyebrow	                    string	                        Section kicker labels (01 / What we do, The Platform, …)

link	                    { text, href }	                A section's labeled text link

stats[]	                    { label, before, value,         Any stat display (proof cards, hero proof row, engagement metrics)
                            valuePrefix, countUp, 
                            valueSuffix, tag, accent }  

rates[] + rateLabel, unit	{ channel, value }	            Published-rate rows

card	                    { label, badge, unit, 
                            rates[], footnote, chips[] }    Side "product shot" panel

ticker[]	                string[]	                    Marquee items

badge	                    { countUp, label }	            Floating stat chip

cta block	                now takes an optional href	    CTA buttons

stickyCta, chat	            top-level objects	            Page-global UI text