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
- has_many :groups
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|null: false, foreign_key :true|

### Association
- belongs_to :user
- has_many :members, through: groups_members
- has_many :groups_members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||

### Association
- has_many :groups, through: groups_members
- has_many :groups_members

## groups_membersテーブル

|Column|Type|Options|
|------|----|-------|
|member_id|integer|null: false, foreign_key :true|
|group_id|integer|null: false, foreign_key :true|

### Association
- belongs_to :group
- belongs_to :member

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

