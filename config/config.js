/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  // Mongo database url
  mongodb: process.env.MONGODB || 'mongodb://localhost/celebs',

  // Personality Insights credentials
  personality_insights: {
  "url": "https://gateway.watsonplatform.net/personality-insights/api",
  "password": "GHywqY3AimE0",
  "username": "51696c21-4989-4c41-8ee0-aad3b0f996cb",
  version: 'v2'
  },

  // Twitter app credentials: https://apps.twitter.com/app
  twitter: process.env.TWITTER ? JSON.parse(process.env.TWITTER) : [{
    consumer_key: 'uqtXkowe9ZI9gDVrHYs75JPDo',
    consumer_secret: 'Rzdbu4ewg1ufWHoYVq511kiqIL1bog3elyw1FwqY2o1Jji6YsQ',
    access_token_key: '396965099-qpEKm4mhd0yjClg7PiKitB7uM749LH8NbxVV0Luw',
    access_token_secret: 'TplLeI15QbCH74DSkyGfbkhix6jSSqw5FZLyNIyEyPXgQ'
  }]
};