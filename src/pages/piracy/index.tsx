import { FC, Fragment } from 'react';

import { SectionWrapper } from '../landing/components/section-wrapper';

export const Piracy: FC = () => {
  return (
    <div className='flex w-full flex-col items-center'>
      <Fragment>
        <SectionWrapper
          section='top'
          className='flex max-w-6xl flex-col items-start justify-start text-white text-glow'
        >
          <h1 className='w-full text-center text-3xl font-bold text-indigo-200'>
            In Defense of Piracy: Why Access Should Outweigh Ownership
          </h1>
          <p className='mt-4 indent-4'>
            Piracy is a contentious issue, often framed as a clear-cut case of
            theft versus rightful ownership. Yet, as with many matters in the
            digital age, reality is more nuanced. While it's true that creating
            media -- <i>films, books, music, games</i> -- takes time, talent,
            and money, it's equally true that the rigid structures of media
            distribution and pricing have failed to evolve in step with modern
            technology and global accessibility. In this context, piracy emerges
            not as a moral failing, but as a symptom of a broken system, and,
            for many, an act of necessity or resistance.
          </p>
          <h2 className='mt-4 text-2xl font-bold text-indigo-200'>
            1. Digital Goods Are Not Physical Goods
          </h2>
          <p className='mt-4 indent-4'>
            At the heart of the piracy debate is a fundamental misunderstanding:
            digital goods are not physical goods. When someone shoplifts a book
            from a store, the store loses a copy and incurs a financial loss.
            When someone downloads that same book illegally, no physical item is
            missing from the shelf. The producer is not deprived of an object.
            They are, at most, deprived of a potential sale.
          </p>
          <p className='mt-4 text-red-500'>
            <b>
              <i>
                But what if the person pirating the book never had the means or
                intention to buy it in the first place?
              </i>
            </b>
          </p>
          <h2 className='mt-4 text-2xl font-bold text-indigo-200'>
            2. Poverty and the Myth of the Lost Sale
          </h2>
          <p className='mt-4 indent-4'>
            A large segment of pirates are not choosing piracy over purchase,
            they are choosing piracy over nothing. In many parts of the world,
            even a modest subscription to Netflix or a single game purchase is
            out of reach due to economic hardship, currency differences, or lack
            of local availability. For these individuals, piracy is not a
            malicious act, but a lifeline to art, culture, and education they
            would otherwise be denied. To argue that these people are "stealing"
            is to ignore the reality that their access does not equate to a lost
            profit. If the option is piracy or nothing, the producer has lost no
            more from piracy than they would have lost from total
            inaccessibility.
          </p>
          <h2 className='mt-4 text-2xl font-bold text-indigo-200'>
            3. The Vanishing Past: Preservation Through Piracy
          </h2>
          <p className='mt-4 indent-4'>
            Art and media are not always eternally available. Licensing issues,
            legal disputes, or simple corporate neglect often lead to media
            being taken off shelves and streaming platforms, locked away in
            vaults or forgotten entirely. When games go unpatched for new
            operating systems, when films are never released outside a specific
            region, when TV shows vanish mid-series, piracy becomes the only
            means of preservation. These are not pirates seeking to avoid
            payment, they’re archivists, cultural historians, and nostalgic fans
            trying to keep art alive.
          </p>
          <p className='mt-4 text-red-500'>
            <b>
              <i>
                Without piracy, countless pieces of media would simply cease to
                exist in any accessible form.
              </i>
            </b>
          </p>
          <h2 className='mt-4 text-2xl font-bold text-indigo-200'>
            4. Access Over Profit: The Frustration of Legal Consumption
          </h2>
          <p className='mt-4 indent-4'>
            Then there are the users who can afford to pay, but find the legal
            options so convoluted or exploitative that piracy becomes the more
            rational choice. In today’s fragmented streaming economy, watching a
            few popular shows might require subscriptions to five or more
            services, all with different prices, platforms, and regional
            restrictions. Add to that intrusive ads, DRM restrictions, and poor
            user experiences, and you get a marketplace that feels like
            punishment, not convenience.
          </p>
          <p className='mt-4 text-red-500'>
            <b>
              <i>
                Ironically, piracy often offers a better user experience: one
                file, no ads, no subscriptions, and instant access. Why punish
                users for choosing the easier, cleaner option?
              </i>
            </b>
          </p>
          <h2 className='mt-4 text-2xl font-bold text-indigo-200'>
            5. Not Theft, But a Message
          </h2>
          <p className='mt-4 indent-4'>
            Ultimately, piracy is not a monolith. It’s not always right, and
            it's not always justifiable. But it is a response, a message to the
            industry that accessibility, pricing, preservation, and customer
            experience matter. People aren’t pirating media just because they
            can, they’re doing so because the system built to sell media is
            often inaccessible, incomplete, or inhospitable.
          </p>
          <p className='mt-4 indent-4'>
            Rather than trying to stamp out piracy with lawsuits and moral
            outrage, perhaps media creators and distributors should ask
            themselves:{' '}
            <b className='text-red-500'>
              <i>
                Why are people pirating in the first place? And what can be done
                to offer a better alternative?{' '}
              </i>
            </b>
            Until that happens,{' '}
            <b className='text-red-500'>
              <i>piracy will remain</i>
            </b>{' '}
            -- not as a crime of greed, but as a{' '}
            <b className='text-red-500'>
              <i>symptom of unmet needs</i>
            </b>{' '}
            in a digital world.
          </p>
        </SectionWrapper>
      </Fragment>
    </div>
  );
};
