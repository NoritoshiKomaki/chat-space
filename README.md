# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# DB設計
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|add_index|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :groups, through: members
- has_many :members
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: members
- has_many :members
- has_many :messages

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key :true|
|group_id|integer|null: false, foreign_key :true|

### Association
- berongs_to :user
- berongs_to :group

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key :true|
|group_id|integer|null: false, foreign_key :true|

### Association
- belongs_to :user
- belongs_to :group